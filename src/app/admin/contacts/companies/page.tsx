import { CompanyTable, NewCompanyForm } from "@/modules/companies";

export default function CompaniesPage() {
    return (
        <>
            <NewCompanyForm/>
            <CompanyTable/>
        </>
    );
}