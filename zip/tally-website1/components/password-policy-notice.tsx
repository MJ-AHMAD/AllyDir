type PasswordPolicyNoticeProps = {
  compact?: boolean
}

export function PasswordPolicyNotice({ compact = false }: PasswordPolicyNoticeProps) {
  if (compact) {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-800 p-4 my-4">
        <p className="text-sm text-gray-700">
          <span className="font-bold">Password Policy:</span> For security purposes, passwords can only be reset by
          contacting the administration team at <span className="text-blue-800">admin@trusted-ally.org</span>.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-800 p-4 mb-6">
      <h4 className="font-bold text-blue-900 mb-2">Password Security Policy</h4>
      <p className="text-gray-700 mb-2">
        All CoreTeam credentials are securely stored and encrypted. For security purposes:
      </p>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Passwords can only be reset by contacting administration</li>
        <li>Accounts are locked after 5 failed login attempts</li>
        <li>All system access is continuously monitored and logged</li>
        <li>Passwords must be at least 12 characters and include special characters</li>
      </ul>
      <p className="mt-2 text-sm font-medium">
        For assistance, contact: <span className="text-blue-800">admin@trusted-ally.org</span> or ext. 1001
      </p>
    </div>
  )
}

