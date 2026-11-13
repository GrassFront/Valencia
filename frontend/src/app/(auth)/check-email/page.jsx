import { Suspense } from "react";
import { AuthLayout } from "../../../components/auth";
import { CheckEmailContent } from "../../../features/auth/components";
import { AUTH_LOBBY_CAPTIONS } from "../../../features/auth/constants";

export const metadata = {
  title: "Check Your Email | Valencia - A Luxury Boutique Hotel",
  description: "A password reset link has been dispatched to your email address.",
};

export default function CheckEmailPage() {
  return (
    <AuthLayout lobbyCaption={AUTH_LOBBY_CAPTIONS.checkEmail}>
      <Suspense fallback={<div className="p-8 font-body text-[#655B51]">Loading instructions...</div>}>
        <CheckEmailContent />
      </Suspense>
    </AuthLayout>
  );
}

