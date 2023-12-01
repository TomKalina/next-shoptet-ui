"use client";

import {
  Breadcrumbs,
  Button,
  ButtonLink,
  CheckboxField,
  ColorField,
  DateField,
  EmailField,
  FormRow,
  Help,
  NumberField,
  PasswordField,
  RadioField,
  Section,
  SectionControls,
  SelectField,
  StaticField,
  StatsCard,
  SystemMessage,
  TextField,
  TextareaField,
} from "@shoptet/ui";
import "@shoptet/ui/dist/index.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shoptet/ui";
import { BarChart, DoughnutChart, LineChart, PieChart } from "@shoptet/chart";

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
  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  };

  const twoDatasetsData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of votes 2019",
        data: [12, 19, 3, 5, 2, 3],
      },
      {
        label: "# of votes 2023",
        data: [1, 2, 3, 4, 5, 6],
      },
    ],
  };

  return (
    <main>
      <Section title="Shoptet UI">
        <Breadcrumbs
          breadcrumbs={[
            { id: 1, url: "#" },
            { id: 2, title: "Storybook", url: "#" },
            { id: 3, title: "Shoptet UI", url: "#" },
          ]}
        />
        <SectionControls>
          <ButtonLink
            href="https://github.com/TomKalina/next-shoptet-ui"
            variant="muted"
          >
            github
          </ButtonLink>
          <Help url="https://shoptet-stout.vercel.app/" text="storybook" />
        </SectionControls>
        <form>
          <div className="v2form">
            <CheckboxField label="CheckboxField" />
            <ColorField label="ColorField" />
            <DateField label="DateField" />
            <EmailField label="EmailField" />
            <NumberField label="NumberField" />
            <PasswordField label="PasswordField" />
            {/* <PhoneField label="label" country={} /> */}
            <RadioField label="RadioField" />
            <SelectField
              label="SelectField"
              options={{ 1: "value 1", 2: "value 2" }}
            />
            <StaticField label="StaticField">StaticField</StaticField>
            <TextareaField label="TextareaField" />
            <TextField label="TextField" />
            <FormRow label="TextField">ahoj</FormRow>
            <Button>Button</Button>
            <ButtonLink>ButtonLink</ButtonLink>
          </div>
        </form>
        {/* <Dropdown label="label" items={} /> */}
        {/* <IconButton  /> */}
        {/* <Input /> */}
        {/* <LabelAfter label="LabelAfter" /> */}
        {/* <Modal /> */}
        {/* <Popover /> */}
        {/* <Select /> */}
        {/* <Textarea /> */}
        {/* <Spinner /> */}
        {/* <Tooltip text="test" /> */}
        <StatsCard value="StatsCard" title={longText} />
        <SystemMessage
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
        <h3>Bar</h3>
        <div style={{ display: "flex" }}>
          <BarChart data={barChartData} />
          <BarChart data={barChartData} valueUnit="votes" />
          <BarChart data={twoDatasetsData} legend />
        </div>

        <h3>Pie</h3>
        <div style={{ display: "flex" }}>
          <PieChart data={barChartData} />
          <PieChart data={barChartData} valueUnit="votes" />
          <PieChart data={twoDatasetsData} legend />
        </div>

        <h3>Line</h3>
        <div style={{ display: "flex" }}>
          <LineChart data={barChartData} />
          <LineChart data={barChartData} valueUnit="votes" />
          <LineChart data={twoDatasetsData} legend />
        </div>

        <h3>Doughnut</h3>
        <div style={{ display: "flex" }}>
          <DoughnutChart data={barChartData} />
          <DoughnutChart data={barChartData} valueUnit="votes" />
          <DoughnutChart data={twoDatasetsData} legend />
        </div>
      </Section>
    </main>
  );
}
