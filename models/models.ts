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