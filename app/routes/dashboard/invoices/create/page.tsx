import { fetchCustomers } from "@/lib/data";
import Breadcrumbs from "@/components/ui/invoices/breadcrumbs";
import Form from "@/components/ui/invoices/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices create",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
