import * as React from "react";
import {
  Link,
  DetailsList,
  Selection,
  buildColumns,
  getTheme,
  mergeStyles,
//   initializeIcons,
  SelectionMode,
} from "@fluentui/react";
import { createListItems } from "@fluentui/example-data";

// initializeIcons();

const theme = getTheme();
const dragEnterClass = mergeStyles({
  backgroundColor: theme.palette.neutralLight,
});

export class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this._selection = new Selection();
    this._dragDropEvents = this._getDragDropEvents();
    this._draggedIndex = -1;
    this._draggedItem = undefined;
    const items = createListItems(10, 0);

    this.state = {
      items: items,
      columns: buildColumns(items, false),
    };
  }

  render() {
    const { items, columns } = this.state;

    return (
      <DetailsList
        setKey="items"
        items={items}
        columns={columns}
        selectionMode={SelectionMode.none}
        onRenderItemColumn={this._onRenderItemColumn}
        dragDropEvents={this._dragDropEvents}
      />
    );
  }

  _getDragDropEvents() {
    return {
      canDrop: () => {
        return true;
      },
      canDrag: () => {
        return true;
      },
      onDragEnter: () => {
        return dragEnterClass;
      },
      onDragLeave: () => {
        return;
      },
      onDrop: (item) => {
        if (this._draggedItem) {
          this._insertBeforeItem(item);
        }
      },
      onDragStart: (item, itemIndex) => {
        console.log(item)
        this._draggedItem = item;
        this._draggedIndex = itemIndex;
      },
      onDragEnd: () => {
        this._draggedItem = undefined;
        this._draggedIndex = -1;
      },
    };
  }

  _onItemInvoked = (item) => {
    alert(`Item invoked: ${item.name}`);
  };

  _onRenderItemColumn = (item, index, column) => {
    const key = column.key;
    if (key === "name") {
      return <Link data-selection-invoke={true}>{item[key]}</Link>;
    }

    return String(item[key]);
  };

  _insertBeforeItem(item) {
    const draggedItems = this._selection.isIndexSelected(this._draggedIndex)
      ? this._selection.getSelection()
      : [this._draggedItem];

    const insertIndex = this.state.items.indexOf(item);
    const items = this.state.items.filter(
      (itm) => draggedItems.indexOf(itm) === -1
    );

    items.splice(insertIndex, 0, ...draggedItems);

    this.setState({ items });
  }
}
