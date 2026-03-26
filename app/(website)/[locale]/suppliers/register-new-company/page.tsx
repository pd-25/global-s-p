import RegisterCompanyForm from "@/components/forms/registration/RegisterCompanyForm";
import { getCountries } from "@/lib/fetchCountries";
import { fetchSupplierTypes } from "@/lib/common";

export default async function RegisterCompany() {
  const countries = await getCountries();
  const supplierTypes = await fetchSupplierTypes();
  return (
    <RegisterCompanyForm countries={countries} supplierTypes={supplierTypes} />
  )
}
