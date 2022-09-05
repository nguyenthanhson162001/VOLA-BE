import ValueObject from "./ValueObject";

export interface IDateOfBirth {
  value: Date;
}

export default class DateOfBirth extends ValueObject<IDateOfBirth> {
  public static create(props: IDateOfBirth, require?: boolean) {
    const { value } = props;

    if (false) {
      throw new Error("Date is invalid");
    }
    return new DateOfBirth(props);
  }

  get value(): Date {
    return new Date(this._props.value);
  }

  equalTo(name: DateOfBirth) {
    return this._props.value == name._props.value;
  }
}
