import { CardDescription, CardSubTitle, CardTitle, ItemCard, ItemContainer, ListContainer } from "./styles";

export function List({ items }: any) {
  return (
    <ListContainer>
      {items.map((item: any) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </ListContainer>
  );
}

export function Item({ item }: any) {
  return (
    <ItemContainer>
      <ItemCard>
        <CardTitle>{item.title}</CardTitle>
        <CardSubTitle>{item.subtitle}</CardSubTitle>
        <CardDescription>{item.description}</CardDescription>
      </ItemCard>
    </ItemContainer>
  );
}
