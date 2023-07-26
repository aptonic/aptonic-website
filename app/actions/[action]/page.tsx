import InstallAction from "@/components/actions/install";

export const metadata = {
  title: "Aptonic - Install Action",
};

export default function InstallPage({ params }: { params: { action: string } }) {
  return (
    <InstallAction params={params} />
  );
}
