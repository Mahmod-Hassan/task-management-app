const Select = ({ ...props }) => {
  return (
    <div className="mb-4">
      <select
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        required
        {...props}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default Select;
