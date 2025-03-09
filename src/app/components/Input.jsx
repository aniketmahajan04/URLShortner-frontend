

export default function Input({placeholder, type}) {
    return <div>
                <input
                    placeholder={placeholder}
                    type={type}
                    className="border px-2 py-1 rounded"
                    autoComplete="off"
                    spellCheck={false}
                    data-testid="custom-input"
                    />
            </div>
}