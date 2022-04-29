import "../styles.css";
import CloseOutlined from "@ant-design/icons/CloseOutlined";

interface SearchFieldProps {
  onChange: (value: string) => void;
  value: string;
}

export default function SearchField(props: SearchFieldProps) {
  const { onChange, value } = props;
  return (
    <>
      <input
        className="searchField__input"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {!!value.length && (
        <button
          className="searchField__deleteButton"
          onClick={() => onChange("")}
        >
          <CloseOutlined />
        </button>
      )}
    </>
  );
}
