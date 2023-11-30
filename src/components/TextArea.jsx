const TextArea = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 font-semibold mb-2">{label}</label>
      <textarea
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
        {...props}
      />
    </div>
  );
};

export default TextArea;
