import { Suspense } from "react";
import { AuthLayout } from "../../../components/auth";
import { LoginForm } from "../../../features/auth/components";
import { AUTH_LOBBY_CAPTIONS } from "../../../features/auth/constants";

export const metadata = {
  title: "Sign In | Valencia - A Luxury Boutique Hotel",
  description: "Sign in to manage your bookings and plan your next stay.",
};

export default function LoginPage() {
  return (
    <AuthLayout lobbyCaption={AUTH_LOBBY_CAPTIONS.login}>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}

