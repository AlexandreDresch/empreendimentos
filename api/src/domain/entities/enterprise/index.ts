import * as uuid from 'uuid';

type EnterpriseProps = {
  _id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address: Address;
}

export interface Address {
  district: string;
  city: string;
  street: string;
  state: string;
  number: string;
  cep: string;
}

export class Enterprise {
  readonly _id: string;
  protected name: string;
  protected status: string;
  protected purpose: string;
  protected ri_number: string;
  protected address: Address;

  protected constructor(props: EnterpriseProps) {
    this._id = props._id;
    this.name = props.name;
    this.status = props.status;
    this.purpose = props.purpose;
    this.ri_number = props.ri_number;
    this.address = props.address;
  }

  static create(
    name: string,
    status: string,
    purpose: string,
    ri_number: string,
    address: Address
  ): Enterprise {
    return new Enterprise({
      _id: uuid.v4(),
      name,
      status,
      purpose,
      ri_number,
      address
    });
  }

  static recover(props: EnterpriseProps): Enterprise {
    return new Enterprise(props);
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeStatus(status: string): void {
    this.status = status;
  }

  changePurpose(purpose: string): void {
    this.purpose = purpose;
  }

  changeRiNumber(ri_number: string): void {
    this.ri_number = ri_number;
  }

  changeAddress(address: Address): void {
    this.address = address;
  }

}