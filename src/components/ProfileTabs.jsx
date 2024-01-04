import { Pivot, PivotItem } from "@fluentui/react";

export default function ProfileTabs() {
  return (
    <Pivot>
      <PivotItem headerText="Home" />
      <PivotItem headerText="Pages" />
      <PivotItem headerText="Documents" />
      <PivotItem headerText="Activity" />
    </Pivot>
  );
}
