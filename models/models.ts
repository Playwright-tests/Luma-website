export type LinkData = {

    link: string,
    url: string
}

export type DropdownListData = {

    triggerElement: string,
    links: LinkData[]
}

export type SublistData = {

    triggerElement_1: string,
    triggerElement_2: string,
    links: LinkData[]
}

export type Product = {

    url: string,
    name: string,
    size: string,
    color: string,
    quantity: string
}

export type Credentials = {

    email: string;
    password: string
}

export type ShippingAddress = {

    email: string,
    firstName: string,
    lastName: string,
    company: string,
    address_1: string,
    address_2: string,
    address_3: string,
    city: string,
    state: string,
    postcode: string,
    country: string,
    phone: string
}

export type ShippingAddressIncorrect = {

    firstname: string,
    lastName: string,
    iaddress_1: string,
    address_2: string,
    address_3: string,
    city: string,
    postcode: string,
    phone: string
}