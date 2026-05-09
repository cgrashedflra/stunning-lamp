import { BugReportForm } from '@/components/forms/reportform'

const page = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6'>
            <BugReportForm />
        </div>
    )
}

export default page