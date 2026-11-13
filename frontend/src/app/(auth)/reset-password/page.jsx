import { Suspense } from "react";
import { AuthLayout } from "../../../components/auth";
import { ResetPasswordForm } from "../../../features/auth/components";
import { AUTH_LOBBY_CAPTIONS } from "../../../features/auth/constants";

export const metadata = {
  title: "Set New Password | Valencia - A Luxury Boutique Hotel",
  description: "Choose a new password for your Valencia account.",
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout lobbyCaption={AUTH_LOBBY_CAPTIONS.resetPassword}>
      <Suspense fallback={<div className="p-8 font-body text-[#655B51]">Loading password form...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}

