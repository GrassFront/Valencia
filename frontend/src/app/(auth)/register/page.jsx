import { Suspense } from "react";
import { AuthLayout } from "../../../components/auth";
import { RegisterForm } from "../../../features/auth/components";
import { AUTH_LOBBY_CAPTIONS } from "../../../features/auth/constants";

export const metadata = {
  title: "Create Account | Valencia - A Luxury Boutique Hotel",
  description: "Keep your bookings and stay details in one place with a Valencia account.",
};

export default function RegisterPage() {
  return (
    <AuthLayout lobbyCaption={AUTH_LOBBY_CAPTIONS.register}>
      <Suspense fallback={null}>
        <RegisterForm />
      </Suspense>
    </AuthLayout>
  );
}

