import { Stack, Label, Dropdown, DropdownMenuItemType } from "@fluentui/react";

const options = [
    {
      key: "fruitsHeader",
      text: "Fruits",
      itemType: DropdownMenuItemType.Header,
    },
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "orange", text: "Orange", disabled: true },
    { key: "grape", text: "Grape" },
    { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
    {
      key: "vegetablesHeader",
      text: "Vegetables",
      itemType: DropdownMenuItemType.Header,
    },
    { key: "broccoli", text: "Broccoli" },
    { key: "carrot", text: "Carrot" },
    { key: "lettuce", text: "Lettuce" },
  ];

export default function ControlPanel() {
  return (
    <Stack horizontal tokens={{ childrenGap: 10 }}>
      <Stack.Item>
        <Stack horizontal>
          <Label>Model</Label>
          <Dropdown
            placeholder="Select an option"
            options={options}
            styles={{ root: { width: 200, marginLeft: 10 } }}
          />
        </Stack>
      </Stack.Item>
      <Stack.Item grow={3}>
        <Stack horizontal>
          <Label>Books</Label>
          <Dropdown
            placeholder="Select options"
            defaultSelectedKeys={["apple", "banana", "grape"]}
            multiSelect
            options={options}
            styles={{ root: { width: "100%", marginLeft: 10 } }}
          />
        </Stack>
      </Stack.Item>
    </Stack>
  );
}
