import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useRef, useState } from "react";
import {
  CardDescription,
  CardSubTitle,
  CardTitle,
  ItemCard,
  ItemContainer,
  ListContainer,
  MoreButton,
  MoreMenu,
} from "./styles";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popper from "@mui/material/Popper";
import * as React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export function List({ items, moreMenu = [], onSelectItem }: any) {
  return (
    <ListContainer>
      {items.map((item: any) => (
        <Item
          key={item.id}
          item={item}
          moreMenu={moreMenu}
          onSelectItem={onSelectItem}
        ></Item>
      ))}
    </ListContainer>
  );
}

export function Item({ item, moreMenu, onSelectItem }: any) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ItemContainer>
      <ItemCard>
        {onSelectItem ? (
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={(value) =>
                  onSelectItem(item.id, value.target.checked)
                }
              />
            }
            label={item.title}
          />
        ) : (
          <CardTitle>{item.title}</CardTitle>
        )}
        <CardSubTitle>{item.subtitle}</CardSubTitle>
        <CardDescription>{item.description}</CardDescription>
        <MoreButton
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreVertIcon />
        </MoreButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <MoreMenu>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {moreMenu.map(
                      (element: { title: string; exec: any }, i: number) => (
                        <MenuItem
                          key={i}
                          onClick={(e) => {
                            handleClose(e);
                            element.exec(item.id);
                          }}
                        >
                          {element.title}
                        </MenuItem>
                      )
                    )}
                  </MenuList>
                </ClickAwayListener>
              </MoreMenu>
            </Grow>
          )}
        </Popper>
      </ItemCard>
    </ItemContainer>
  );
}
