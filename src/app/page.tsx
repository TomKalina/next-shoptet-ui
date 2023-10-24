"use client";

import UI from "@shoptet/ui";
import "@shoptet/ui/dist/index.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shoptet/ui";

export default function Home() {
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.";
  const rows = [
    {
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UI.Breadcrumbs
        breadcrumbs={[
          { id: 1, title: "Home", url: "#" },
          { id: 2, title: "Storybook", url: "#" },
          { id: 3, title: "Shoptet UI", url: "#" },
        ]}
      />
      <UI.Section title="Shoptet UI">
        <UI.SectionControls>
          <UI.ButtonLink
            href="https://github.com/TomKalina/next-shoptet-ui"
            variant="muted"
          >
            github
          </UI.ButtonLink>
          <UI.Help url="https://shoptet-stout.vercel.app/" text="storybook" />
        </UI.SectionControls>
        <form>
          <div className="v2form">
            <UI.CheckboxField label="CheckboxField" />
            <UI.ColorField label="ColorField" />
            <UI.DateField label="DateField" />
            <UI.EmailField label="EmailField" />
            <UI.NumberField label="NumberField" />
            <UI.PasswordField label="PasswordField" />
            {/* <UI.PhoneField label="label" country={} /> */}
            <UI.RadioField label="RadioField" />
            <UI.SelectField
              label="SelectField"
              options={{ 1: "value 1", 2: "value 2" }}
            />
            <UI.StaticField label="StaticField">StaticField</UI.StaticField>
            <UI.TextareaField label="TextareaField" />
            <UI.TextField label="TextField" />
            <UI.FormRow label="TextField">ahoj</UI.FormRow>
            <UI.Button>Button</UI.Button>
            <UI.ButtonLink>ButtonLink</UI.ButtonLink>
          </div>
        </form>
        {/* <UI.Dropdown label="label" items={} /> */}
        {/* <UI.IconButton  /> */}
        {/* <UI.Input /> */}
        {/* <UI.LabelAfter label="LabelAfter" /> */}
        {/* <UI.Modal /> */}
        {/* <UI.Popover /> */}
        {/* <UI.Select /> */}
        {/* <UI.Textarea /> */}
        {/* <UI.Spinner /> */}
        {/* <UI.Tooltip text="test" /> */}
        <UI.StatsCard value="StatsCard" title={longText} />
        <UI.SystemMessage
          level="alert"
          title="SystemMessage"
          description={longText}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Dessert (100g serving)</TableHeader>
              <TableHeader>Calories</TableHeader>
              <TableHeader>Fat (g)</TableHeader>
              <TableHeader>Carbs (g)</TableHeader>
              <TableHeader>Protein (g)</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </UI.Section>
    </main>
  );
}
