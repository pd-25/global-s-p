"use client"

import { useEffect, useRef, useState } from "react"
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Icon,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import Modal from "./Modal"
import apiService, { ApiError } from "@/service/apiService"
import { endpoints } from "@/config/adminEndpoints"

interface AddSuppliersModalProps {
  open: boolean
  onClose: () => void
  onSuccess?: () => void
  editSupplierKey?: number | string | null
}

interface Country {
  id: number
  name: string
}

interface SupplierType {
  id: number
  name: string
}

interface OptionListResponse<T> {
  success: boolean
  message: string
  data: T[]
}

interface SupplierDocument {
  id: number
  name: string
  document: string
  is_active: boolean
}

interface SupplierDetail {
  id: number
  name?: string | null
  about?: string | null
  zipcode?: string | null
  city?: string | null
  country_id?: number | null
  address?: string | null
  delivery_area?: string | null
  founded_year?: number | null
  employee_strength?: string | null
  supplier_type_id?: number | null
  is_verified?: boolean | null
  is_accept_terms?: boolean | null
  vat_number?: string | null
  company_site?: string | null
  company_phone_number?: string | null
  company_email?: string | null
  logo?: string | null
  documents?: SupplierDocument[]
}

interface SupplierDetailResponse {
  success: boolean
  message: string
  data: SupplierDetail
}

export default function AddSuppliersModal({
  open,
  onClose,
  onSuccess,
  editSupplierKey = null,
}: AddSuppliersModalProps) {
  const [name, setName] = useState("")
  const [about, setAbout] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [city, setCity] = useState("")
  const [countryId, setCountryId] = useState("")
  const [address, setAddress] = useState("")
  const [deliveryArea, setDeliveryArea] = useState("")
  const [foundedYear, setFoundedYear] = useState("")
  const [employeeStrength, setEmployeeStrength] = useState("")
  const [supplierTypeId, setSupplierTypeId] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [isAcceptTerms, setIsAcceptTerms] = useState(false)
  const [vatNumber, setVatNumber] = useState("")
  const [companySite, setCompanySite] = useState("")
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [documents, setDocuments] = useState<{ name: string; file: File | null; preview?: string; id?: number }[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingOptions, setIsLoadingOptions] = useState(false)
  const [isFetchingSupplier, setIsFetchingSupplier] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [countries, setCountries] = useState<Country[]>([])
  const [supplierTypes, setSupplierTypes] = useState<SupplierType[]>([])

  const [nameError, setNameError] = useState<string | null>(null)
  const [countryIdError, setCountryIdError] = useState<string | null>(null)
  const [supplierTypeIdError, setSupplierTypeIdError] = useState<string | null>(
    null,
  )
  const [foundedYearError, setFoundedYearError] = useState<string | null>(null)
  const [companyEmailError, setCompanyEmailError] = useState<string | null>(
    null,
  )
  const [cityError, setCityError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const isEditMode = !!editSupplierKey

  useEffect(() => {
    if (!open) return

    const fetchDropdownOptions = async () => {
      setIsLoadingOptions(true)
      setError(null)

      try {
        const [countriesRes, supplierTypesRes] = await Promise.all([
          apiService.get<OptionListResponse<Country>>(
            endpoints.countries.list,
            {
              per_page: 100,
              page: 1,
              sort_order: "desc",
            },
          ),
          apiService.get<OptionListResponse<SupplierType>>(
            endpoints.supplierTypes.list,
            {
              per_page: 100,
              page: 1,
              sort_order: "desc",
            },
          ),
        ])

        if (countriesRes.success) {
          setCountries(countriesRes.data || [])
        }
        if (supplierTypesRes.success) {
          setSupplierTypes(supplierTypesRes.data || [])
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error
            ? err.message
            : "Failed to load country and supplier type options."
        setError(message)
      } finally {
        setIsLoadingOptions(false)
      }
    }

    fetchDropdownOptions()
  }, [open])

  useEffect(() => {
    if (!open || !editSupplierKey) return

    const fetchSupplierDetails = async () => {
      setIsFetchingSupplier(true)
      setError(null)

      try {
        const response = await apiService.get<SupplierDetailResponse>(
          endpoints.suppliers.getById(editSupplierKey),
        )

        if (response.success && response.data) {
          const supplier = response.data
          setName(supplier.name ?? "")
          setAbout(supplier.about ?? "")
          setZipcode(supplier.zipcode ?? "")
          setCity(supplier.city ?? "")
          setCountryId(supplier.country_id ? String(supplier.country_id) : "")
          setAddress(supplier.address ?? "")
          setDeliveryArea(supplier.delivery_area ?? "")
          setFoundedYear(
            supplier.founded_year ? String(supplier.founded_year) : "",
          )
          setEmployeeStrength(supplier.employee_strength ?? "")
          setSupplierTypeId(
            supplier.supplier_type_id ? String(supplier.supplier_type_id) : "",
          )
          setIsVerified(Boolean(supplier.is_verified))
          setIsAcceptTerms(Boolean(supplier.is_accept_terms))
          setVatNumber(supplier.vat_number ?? "")
          setCompanySite(supplier.company_site ?? "")
          setCompanyPhoneNumber(supplier.company_phone_number ?? "")
          setCompanyEmail(supplier.company_email ?? "")
          setLogoFile(null)
          setLogoPreview(supplier.logo ?? null)
          
          if (supplier.documents && supplier.documents.length > 0) {
            setDocuments(
              supplier.documents.map(doc => ({
                id: doc.id,
                name: doc.name,
                file: null,
                preview: doc.document
              }))
            )
          } else {
            setDocuments([])
          }
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error
            ? err.message
            : "Failed to load supplier details for editing."
        setError(message)
      } finally {
        setIsFetchingSupplier(false)
      }
    }

    fetchSupplierDetails()
  }, [open, editSupplierKey])

  const resetForm = () => {
    setName("")
    setAbout("")
    setZipcode("")
    setCity("")
    setCountryId("")
    setAddress("")
    setDeliveryArea("")
    setFoundedYear("")
    setEmployeeStrength("")
    setSupplierTypeId("")
    setIsVerified(false)
    setIsAcceptTerms(false)
    setVatNumber("")
    setCompanySite("")
    setCompanyPhoneNumber("")
    setCompanyEmail("")
    setLogoFile(null)
    setLogoPreview(null)
    setDocuments([])
    setIsSubmitting(false)
    setError(null)
    setNameError(null)
    setCountryIdError(null)
    setSupplierTypeIdError(null)
    setFoundedYearError(null)
    setCompanyEmailError(null)
    setCityError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleClose = () => {
    if (isSubmitting) return
    resetForm()
    onClose()
  }

  const handleFileSelect = (file: File) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
      "image/webp",
    ]
    if (!allowedTypes.includes(file.type)) {
      setError("Invalid file type. Please upload JPG, PNG, GIF, SVG, or WebP.")
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File is too large. Maximum size is 2MB.")
      return
    }

    setError(null)
    setLogoFile(file)

    const reader = new FileReader()
    reader.onloadend = () => {
      setLogoPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) handleFileSelect(file)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveLogo = () => {
    setLogoFile(null)
    setLogoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleAddDocument = () => {
    if (documents.length < 5) {
      setDocuments([...documents, { name: "", file: null }])
    }
  }

  const handleRemoveDocument = (index: number) => {
    const newDocs = [...documents]
    newDocs.splice(index, 1)
    setDocuments(newDocs)
  }

  const handleDocumentChange = (
    index: number,
    field: "name" | "file",
    value: string | File | null,
  ) => {
    const newDocs = [...documents]
    newDocs[index] = { ...newDocs[index], [field]: value as any }
    setDocuments(newDocs)
  }

  const validate = () => {
    let isValid = true

    if (!name.trim()) {
      setNameError("Supplier name is required")
      isValid = false
    } else {
      setNameError(null)
    }

    if (!countryId) {
      setCountryIdError("Country is required")
      isValid = false
    } else {
      setCountryIdError(null)
    }

    if (!supplierTypeId) {
      setSupplierTypeIdError("Supplier type is required")
      isValid = false
    } else {
      setSupplierTypeIdError(null)
    }

    if (!city.trim()) {
      setCityError("City is required")
      isValid = false
    } else {
      setCityError(null)
    }

    if (foundedYear.trim() && !/^\d{4}$/.test(foundedYear.trim())) {
      setFoundedYearError("Founded year must be 4 digits (e.g. 2020)")
      isValid = false
    } else {
      setFoundedYearError(null)
    }

    if (
      companyEmail.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyEmail.trim())
    ) {
      setCompanyEmailError("Please provide a valid company email")
      isValid = false
    } else {
      setCompanyEmailError(null)
    }

    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!validate()) return

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", name.trim())
      formData.append("about", about.trim())
      formData.append("zipcode", zipcode.trim())
      formData.append("city", city.trim())
      formData.append("country_id", countryId)
      formData.append("address", address.trim())
      formData.append("delivery_area", deliveryArea.trim())
      if (foundedYear.trim()) {
        formData.append("founded_year", foundedYear.trim())
      }
      formData.append("employee_strength", employeeStrength.trim())
      formData.append("supplier_type_id", supplierTypeId)
      formData.append("is_verified", String(isVerified))
      formData.append("is_accept_terms", String(isAcceptTerms))
      formData.append("vat_number", vatNumber.trim())
      formData.append("company_site", companySite.trim())
      formData.append("company_phone_number", companyPhoneNumber.trim())
      formData.append("company_email", companyEmail.trim())

      if (logoFile) {
        formData.append("logo", logoFile)
      }

      if (!isEditMode) {
        documents.forEach((doc, index) => {
          if (doc.name && doc.file) {
            formData.append(`documents[${index}][name]`, doc.name)
            formData.append(`documents[${index}][file]`, doc.file)
          }
        })
      }

      if (isEditMode) {
        await apiService.putFormData(
          endpoints.suppliers.update(editSupplierKey!),
          formData,
        )
      } else {
        await apiService.postFormData(endpoints.suppliers.create, formData)
      }

      resetForm()
      onClose()
      onSuccess?.()
    } catch (err: unknown) {
      if (err instanceof ApiError && Object.keys(err.fieldErrors).length > 0) {
        if (err.fieldErrors.name) setNameError(err.fieldErrors.name)
        if (err.fieldErrors.country_id)
          setCountryIdError(err.fieldErrors.country_id)
        if (err.fieldErrors.supplier_type_id)
          setSupplierTypeIdError(err.fieldErrors.supplier_type_id)
        if (err.fieldErrors.founded_year)
          setFoundedYearError(err.fieldErrors.founded_year)
        if (err.fieldErrors.company_email)
          setCompanyEmailError(err.fieldErrors.company_email)
        if (err.fieldErrors.city) setCityError(err.fieldErrors.city)

        const unmappedErrors = Object.entries(err.fieldErrors)
          .filter(
            ([key]) =>
              ![
                "name",
                "country_id",
                "supplier_type_id",
                "founded_year",
                "company_email",
                "city",
              ].includes(key),
          )
          .map(([key, msg]) => `${key}: ${msg}`)

        setError(
          unmappedErrors.length ? unmappedErrors.join("\n") : err.message,
        )
      } else {
        const message =
          err instanceof Error
            ? err.message
            : `Failed to ${isEditMode ? "update" : "create"} supplier. Please try again.`
        setError(message)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={isEditMode ? "Update Supplier" : "Add New Supplier"}
      maxWidth="lg"
    >
      {isLoadingOptions || isFetchingSupplier ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 6,
          }}
        >
          <CircularProgress size={40} />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            {isFetchingSupplier
              ? "Loading supplier details..."
              : "Loading country and supplier type options..."}
          </Typography>
        </Box>
      ) : (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
              },
              gap: 3,
            }}
          >
            {error && (
              <Alert
                severity="error"
                onClose={() => setError(null)}
                sx={{ gridColumn: "1 / -1" }}
              >
                {error}
              </Alert>
            )}
            <TextField
              fullWidth
              label="Supplier Name"
              placeholder="e.g. Global Source Trading"
              variant="outlined"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (nameError) setNameError(null)
              }}
              error={!!nameError}
              helperText={nameError}
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{ gridColumn: "1 / -1" }}
            />
            <TextField
              fullWidth
              label="About"
              placeholder="Short supplier profile..."
              multiline
              rows={3}
              variant="outlined"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value)
              }}
              sx={{ gridColumn: "1 / -1" }}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Address"
              placeholder="e.g. 123 Business Street"
              multiline
              rows={3}
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              sx={{ gridColumn: "1 / -1" }}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Zipcode"
              placeholder="e.g. 1207"
              variant="outlined"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <FormControl fullWidth error={!!countryIdError}>
              <InputLabel id="country-select-label" shrink>
                Country
              </InputLabel>
              <Select
                labelId="country-select-label"
                label="Country"
                value={countryId}
                onChange={(e) => {
                  setCountryId(String(e.target.value))
                  if (countryIdError) setCountryIdError(null)
                }}
                displayEmpty
                notched
              >
                <MenuItem value="">
                  <em>Select country</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              {countryIdError && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ mt: 0.5, ml: 1.75 }}
                >
                  {countryIdError}
                </Typography>
              )}
            </FormControl>
            <TextField
              fullWidth
              label="City"
              placeholder="e.g. Moscow"
              variant="outlined"
              required
              value={city}
              onChange={(e) => {
                setCity(e.target.value)
                if (cityError) setCityError(null)
              }}
              error={!!cityError}
              helperText={cityError}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Delivery Area"
              placeholder="e.g. Europe, Asia"
              variant="outlined"
              value={deliveryArea}
              onChange={(e) => setDeliveryArea(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Founded Year"
              placeholder="e.g. 2020"
              variant="outlined"
              value={foundedYear}
              onChange={(e) => {
                setFoundedYear(e.target.value)
                if (foundedYearError) setFoundedYearError(null)
              }}
              error={!!foundedYearError}
              helperText={foundedYearError}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Employee Strength"
              placeholder="e.g. 50-100"
              variant="outlined"
              value={employeeStrength}
              onChange={(e) => setEmployeeStrength(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <FormControl fullWidth error={!!supplierTypeIdError}>
              <InputLabel id="supplier-type-select-label" shrink>
                Supplier Type
              </InputLabel>
              <Select
                labelId="supplier-type-select-label"
                label="Supplier Type"
                value={supplierTypeId}
                onChange={(e) => {
                  setSupplierTypeId(String(e.target.value))
                  if (supplierTypeIdError) setSupplierTypeIdError(null)
                }}
                displayEmpty
                notched
              >
                <MenuItem value="">
                  <em>Select supplier type</em>
                </MenuItem>
                {supplierTypes.map((supplierType) => (
                  <MenuItem key={supplierType.id} value={supplierType.id}>
                    {supplierType.name}
                  </MenuItem>
                ))}
              </Select>
              {supplierTypeIdError && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ mt: 0.5, ml: 1.75 }}
                >
                  {supplierTypeIdError}
                </Typography>
              )}
            </FormControl>
            <TextField
              fullWidth
              label="VAT Number"
              placeholder="e.g. VAT-123456"
              variant="outlined"
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Company Site"
              placeholder="e.g. https://supplier.com"
              variant="outlined"
              value={companySite}
              onChange={(e) => setCompanySite(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Company Phone Number"
              placeholder="e.g. +8801712345678"
              variant="outlined"
              value={companyPhoneNumber}
              onChange={(e) => setCompanyPhoneNumber(e.target.value)}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              fullWidth
              label="Company Email"
              placeholder="e.g. contact@supplier.com"
              variant="outlined"
              value={companyEmail}
              onChange={(e) => {
                setCompanyEmail(e.target.value)
                if (companyEmailError) setCompanyEmailError(null)
              }}
              error={!!companyEmailError}
              helperText={companyEmailError}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isVerified}
                  onChange={(e) => setIsVerified(e.target.checked)}
                />
              }
              label="Is Verified"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAcceptTerms}
                  onChange={(e) => setIsAcceptTerms(e.target.checked)}
                />
              }
              label="Accept terms and condition"
            />
            <Box sx={{ gridColumn: "1 / -1" }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Supplier Logo (optional)
              </Typography>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif,image/svg+xml,image/webp"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />

              {logoPreview ? (
                <Paper
                  variant="outlined"
                  sx={{
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: "8px",
                    p: 2,
                    textAlign: "center",
                    bgcolor: "grey.50",
                  }}
                >
                  <Box
                    component="img"
                    src={logoPreview}
                    alt="Supplier logo preview"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: 150,
                      borderRadius: "4px",
                      objectFit: "contain",
                    }}
                  />
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    sx={{ mt: 2 }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={handleUploadClick}
                      startIcon={<Icon>swap_horiz</Icon>}
                      sx={{ textTransform: "none", borderRadius: "6px" }}
                    >
                      Change
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={handleRemoveLogo}
                      startIcon={<Icon>delete</Icon>}
                      sx={{ textTransform: "none", borderRadius: "6px" }}
                    >
                      Remove
                    </Button>
                  </Stack>
                  {logoFile && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 1, display: "block" }}
                    >
                      {logoFile.name} ({(logoFile.size / 1024).toFixed(1)} KB)
                    </Typography>
                  )}
                </Paper>
              ) : (
                <Paper
                  variant="outlined"
                  onClick={handleUploadClick}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  sx={{
                    border: "2px dashed",
                    borderColor: "divider",
                    borderRadius: "8px",
                    p: 4,
                    textAlign: "center",
                    bgcolor: "grey.50",
                    cursor: "pointer",
                    transition: "border-color 0.2s, background-color 0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "primary.50",
                    },
                  }}
                >
                  <Stack spacing={1} alignItems="center">
                    <Icon sx={{ fontSize: "2.5rem", color: "text.secondary" }}>
                      cloud_upload
                    </Icon>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Click to upload or drag and drop
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      JPG, PNG, GIF, SVG or WebP (max. 2MB)
                    </Typography>
                  </Stack>
                </Paper>
              )}
            </Box>

            {/* Documents Section */}
            <Box sx={{ gridColumn: "1 / -1" }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Company Documents
              </Typography>
              
              {isEditMode ? (
                documents.length > 0 ? (
                  <Stack spacing={2}>
                    {documents.map((doc, index) => (
                      <Paper key={index} variant="outlined" sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "grey.50", borderRadius: "8px" }}>
                        <Box>
                          <Typography variant="body2" fontWeight={600}>{doc.name || `Document ${index + 1}`}</Typography>
                        </Box>
                        <Button
                          variant="outlined"
                          size="small"
                          href={doc.preview}
                          target="_blank"
                          startIcon={<Icon>visibility</Icon>}
                          sx={{ textTransform: "none", borderRadius: "6px" }}
                        >
                          View
                        </Button>
                      </Paper>
                    ))}
                  </Stack>
                ) : (
                  <Paper variant="outlined" sx={{ p: 3, textAlign: "center", bgcolor: "grey.50", borderRadius: "8px", borderStyle: "dashed" }}>
                    <Typography variant="body2" color="text.secondary">No documents available.</Typography>
                  </Paper>
                )
              ) : (
                <Stack spacing={2}>
                  {documents.map((doc, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <TextField
                        fullWidth
                        label="Document Name"
                        placeholder="e.g. Incorporation Certificate"
                        size="small"
                        value={doc.name}
                        onChange={(e) => handleDocumentChange(index, "name", e.target.value)}
                      />
                      <Button
                        component="label"
                        variant="outlined"
                        sx={{ flexShrink: 0, height: 40, textTransform: "none", maxWidth: { xs: 150, sm: 200 }, overflow: "hidden" }}
                        startIcon={<Icon>upload_file</Icon>}
                      >
                        <Box sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {doc.file ? doc.file.name : "Upload File"}
                        </Box>
                        <input
                          type="file"
                          hidden
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleDocumentChange(index, "file", e.target.files[0])
                            }
                          }}
                        />
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleRemoveDocument(index)}
                        sx={{ minWidth: "auto", p: 1, mt: 0.5 }}
                      >
                        <Icon>delete</Icon>
                      </Button>
                    </Box>
                  ))}
                  
                  {documents.length < 5 && (
                    <Button
                      variant="text"
                      startIcon={<Icon>add</Icon>}
                      onClick={handleAddDocument}
                      sx={{ alignSelf: "flex-start", textTransform: "none" }}
                    >
                      Add Document
                    </Button>
                  )}
                </Stack>
              )}
            </Box>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              sx={{ pt: 2, gridColumn: "1 / -1" }}
            >
              <Button
                variant="outlined"
                onClick={handleClose}
                disabled={isSubmitting}
                sx={{ borderRadius: "8px", textTransform: "none", px: 3 }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ borderRadius: "8px", textTransform: "none", px: 4 }}
              >
                {isSubmitting ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  isEditMode ? "Update Supplier" : "Add Supplier"
                )}
              </Button>
            </Stack>
          </Box>
        </Box>
      )}
    </Modal>
  )
}
