"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import Link from "next/link";
import {
    Controller,
    DefaultValues,
    FieldValues,
    Path,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

interface FormProps<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean }>;
    formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
    schema,
    defaultValues,
    formType,
    onSubmit,
}: FormProps<T>) => {

    const form = useForm<z.infer<typeof schema>>({
        resolver: standardSchemaResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    const handleSubmit: SubmitHandler<T> = async (data) => {
        // await onSubmit(data);
    };

    const buttonText =
        formType === "SIGN_IN"
            ? "Sign In"
            : "Sign Up";

    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="mt-10 space-y-6 flex flex-col items-center justify-between text-white "
        >
            <FieldGroup>

                {Object.keys(defaultValues).map((fieldName) => (

                    <Controller
                        key={fieldName}
                        control={form.control}
                        name={fieldName as Path<T>}
                        render={({ field, fieldState }) => (

                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel
                                    htmlFor={field.name}
                                    className=""
                                >
                                    {field.name === "email"
                                        ? "Email Address"
                                        : field.name.charAt(0).toUpperCase() +
                                        field.name.slice(1)}
                                </FieldLabel>

                                <Input
                                    {...field}
                                    id={field.name}
                                    required
                                    aria-invalid={fieldState.invalid}
                                    type={
                                        field.name === "password"
                                            ? "password"
                                            : "text"
                                    }
                                    className=""
                                />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                ))}

            </FieldGroup>

            <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full py-6 rounded-2xl bg-blue-500/90 hover:bg-blue-600 text-white text-md font-medium shadow-lg"
            >
                {form.formState.isSubmitting
                    ? buttonText === "Sign In"
                        ? "Signing In..."
                        : "Signing Up..."
                    : buttonText}
            </Button>

            {formType === "SIGN_IN" ? (
                <p>
                    Don't have an account?{" "}
                    <Link
                        href="/sign-up"
                        className="paragraph-semibold primary-text-gradient text-blue-600"
                    >
                        Sign-up
                    </Link>
                </p>
            ) : (
                <p>
                    Already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="paragraph-semibold primary-text-gradient  text-blue-600"
                    >
                        Sign in
                    </Link>
                </p>
            )}
        </form>
    );
};

export default AuthForm;