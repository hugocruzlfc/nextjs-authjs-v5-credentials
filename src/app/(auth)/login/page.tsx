import { LoginForm } from "@/components/LoginForm";

export default function Page({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";
  return (
    <div>
      <LoginForm
        isVerified={isVerified}
        OAuthAccountNotLinked={OAuthAccountNotLinked}
      />
    </div>
  );
}
