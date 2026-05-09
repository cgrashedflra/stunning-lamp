"use client";

import Form from '@/components/forms/Form';
import { SignInSchema } from '@/lib/validations';

const SignIn = () => {
    return (
        <Form
            formType="SIGN_IN"
            schema={SignInSchema}
            defaultValues={{ email: "", password: "" }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
        />
    )
}

export default SignIn