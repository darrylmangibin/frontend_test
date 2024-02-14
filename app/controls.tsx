import { FC } from "react";

import Select, { Props } from "react-select";
import { User } from "./types/user";

export type FieldOptionKeys = keyof Pick<User, "company" | "name" | "email">;
export type DirectionOptionKeys = "ascending" | "descending";
export type FieldOptionType =
  | {
      label: string;
      value: FieldOptionKeys;
    }
  | undefined;
export type DirectionOptionType =
  | {
      label: string;
      value: DirectionOptionKeys;
    }
  | undefined;

interface ControlsProps {
  onChangeField?: Props<
    { label: string; value: FieldOptionKeys },
    false
  >["onChange"];
  onChangeDirection?: Props<
    { label: string; value: DirectionOptionKeys },
    false
  >["onChange"];
  fieldValue?: FieldOptionType | null;
  directionValue?: DirectionOptionType | null;
}

const Controls: FC<ControlsProps> = ({
  onChangeField,
  onChangeDirection,
  fieldValue,
  directionValue,
}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ] satisfies { label: string; value: FieldOptionKeys }[];

  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ] satisfies { label: string; value: DirectionOptionKeys }[];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={onChangeField}
          value={fieldValue}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={onChangeDirection}
          value={directionValue}
        />
      </div>
    </div>
  );
};

export default Controls;
