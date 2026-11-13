import { AuthLayout } from "../../../components/auth";
import { ForgotPasswordForm } from "../../../features/auth/components";
import { AUTH_LOBBY_CAPTIONS } from "../../../features/auth/constants";

export const metadata = {
  title: "Forgot Password | Valencia - A Luxury Boutique Hotel",
  description: "Recover access to your Valencia account with a password reset link.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout lobbyCaption={AUTH_LOBBY_CAPTIONS.forgotPassword}>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}

