type Creator = {
  email: string;
  id: number;
  name: string;
  phone: string;
};

type City = {
  country_id: number;
  id: number;
  lat: string;
  long: string;
  name: string;
};

type District = {
  city_id: number;
  id: number;
  lat: string;
  long: string;
  name: string;
};

type DeliveryAddress = {
  address: string;
  building_number: null | string;
  city: City;
  created_at: number;
  delivery_address: boolean;
  district: District;
  id: number;
  lat: null | string;
  lng: null | string;
  name: string;
  neighborhood: null | string;
  responsible: string;
  responsible_phone: string;
  responsible_title: null | string;
  type: number;
  type_value: string | null;
};

type Driver = {
  name: string;
  phone: string;
  surname: string;
  user_id: number;
};

type LatestStatus = {
  created_at: number;
  id: number;
  type: number;
  type_value: string;
};

type GivingPriceUser = {
  id: number;
  name: string;
  surname: string;
};

type BaseCurrency = {
  code: string;
  id: number;
  name: string;
  updated_at: string;
  value: string;
};

type PriceDetails = {
  base_price: string;
  base_currency: BaseCurrency;
  converting_currency: BaseCurrency;
  converting_exchange: string;
};

type Carrier = {
  bank: null | string;
  iban: null | string;
  id: number;
  name: null | string;
  carrier_invoice_upload: boolean;
  carrier_payment: boolean;
  carrier_payment_receipt_upload: boolean;
  carrier_payment_status: number;
  carrier_payment_status_value: string;
  code: string;
  created_at: number;
  creator: Creator;
  status: number;
  surname: string;
  tckn: null | string;
  type: number;
  type_value: string;
};

type PriceConfirmingUser = {
  email: string;
  id: number;
  name: string;
  phone: string;
  surname: string;
};

type Shipper_Price = {
  created_at: number;
  giving_price_user: GivingPriceUser;
  id: number;
  price_confirming_user: PriceConfirmingUser;
  price_details: PriceDetails;
  status: number;
  status_value: string;
};

interface Carrier_Price {
  carrier_price: string;
  carrier_price_tax_free: string;
  created_at: number;
  giving_price_user: GivingPriceUser;
  id: number;
  kamion_share: string;
  kamion_share_percent: string;
  price_details: PriceDetails;
}

interface Kamion_Price {
  kamion_share: string;
  kamion_share_percent: string;
}

interface Price {
  carrier: Carrier_Price;
  kamion: Kamion_Price;
  shipper: Shipper_Price;
}

interface Sector {
  id: number;
  name: string;
}

interface Shipper {
  created_at: number;
  id: number;
  name: string;
  phone: string;
  tax_number: string;
  tax_office: string;
  sector: Sector;
}

interface Vehicle {
  group_type: number;
  group_type_value: string;
  id: number;
  plate: string;
  type: number;
  type_value: string;
}

export type TransportDetailsType = {
  carrier: Carrier;
  delivery_address: DeliveryAddress;
  delivery_date: null;
  departure_address: DeliveryAddress;
  driver: Driver;
  driver_last_location: null;
  shipper: Shipper;
  vehicle: Vehicle;
  id: number;
  invoice_ready: boolean;
  is_invoice_created: boolean;
  latest_status: LatestStatus;
  load_reception: number;
  load_reception_value: string;
  payment_status: null;
  payment_type: null;
  pick_up_date: number;
  picked_up_date: null;
  pickup_hub_range: null;
  planned_transport: null;
  price: Price;
};
