"use client";

import { lusitana } from "@/components/ui/fonts";
import {
  ArrowRightIcon,
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { STRINGS } from "@/lib/constants/strings/ko";
import { useAuthStore } from "@/lib/store/use-auth-store";
import { KEYS } from "@/lib/constants/keys";
import { Button } from "@/components/shared/button";
import { signUp } from "@/lib/firebase/auth";
import { ROUTES } from "@/lib/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignupForm() {
  const router = useRouter();
  const { user, loading, message } = useAuthStore();

  useEffect(() => {
    console.log(user);

    if (user) {
      router.replace(ROUTES.HOME);
    }
  }, [user, router]);

  const handleAction = async (formData: FormData) => {
    await signUp(formData);
  };

  return (
    <form action={handleAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          {STRINGS.AUTH.SIGNUP_TITLE}
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              {STRINGS.COMMON.EMAIL}
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name={KEYS.COMMON.EMAIL}
                placeholder={STRINGS.PLACEHOLDER.EMAIL}
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              {STRINGS.COMMON.PASSWORD}
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name={KEYS.COMMON.PASSWORD}
                placeholder={STRINGS.COMMON.PASSWORD}
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="passwordConfirm"
            >
              {STRINGS.COMMON.PASSWORD_CONFIRM}
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password-confirm"
                type="password"
                name={KEYS.COMMON.PASSWORD_CONFIRM}
                placeholder={STRINGS.COMMON.PASSWORD_CONFIRM}
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="passwordConfirm"
            >
              {STRINGS.COMMON.DISPLAY_NAME}
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                name={KEYS.COMMON.DISPLAY_NAME}
                placeholder={STRINGS.COMMON.DISPLAY_NAME}
                required
                minLength={2}
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button className="mt-10 w-full" aria-disabled={loading}>
          {loading ? STRINGS.COMMON.LOADING : STRINGS.COMMON.SIGNUP}
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div className="flex mt-4 items-end">
          {message && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{message}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
