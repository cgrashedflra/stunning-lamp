"use client";

import Form from '@/components/forms/Form'
import { SignUpSchema } from '@/lib/validations'

const SignUp = () => {
    return (
        <Form
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{ username: "", name: "", email: "", password: "" }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
        />
    )
}

export default SignUp