import React from "react";
import { toUrl } from "../../utils/toUrl";
import Delivery from "../delivery/delivery";
import MenuItem from "../menu-item/MenuItem";
import gear from "../../images/gear.svg";
import encoder from "../../images/linear-encoder.svg";
import counter from "../../images/counter.svg";
import motor from "../../images/diesel-motor.svg";
import grinder from "../../images/grinder.svg";
import cooler from "../../images/propeller.svg";
import spring from "../../images/spring.svg";
import pump from "../../images/pump.svg";

const items = [
  {
    name: "Linear displacement encoders",
    url: toUrl("Linear displacement encoders"),
    icon: <img src={encoder} />,
    onClick: () => {},
    children: [
      {
        name: "Non-contact linear sensors",
        url: toUrl("Non-contact linear sensors"),
      },
      {
        name: "Shaft rotation sensor",
        url: toUrl("Shaft rotation sensor"),
      },
      {
        name: "Angle sensors",
        url: toUrl("Angle sensors"),
      },
      {
        name: "Linear lateral position sensors",
        url: toUrl("Linear lateral position sensors"),
      },
      {
        name: "Magnetostrictive sensors (In-cylinder)",
        url: toUrl("Magnetostrictive sensors"),
      },
      {
        name: "multi-turn sensor",
        url: toUrl("multi-turn sensor"),
      },
      {
        name: "Open rotation sensors",
        url: toUrl("Open rotation sensors"),
      },
      {
        name: "Rod linear sensors",
        url: toUrl("Rod linear sensors "),
      },
    ],
  },
  {
    name: "Diesel meters Braun",
    url: toUrl("Diesel meters Braun"),
    icon: <img src={counter} />,
  },
  {
    name: "Diesel engines, generators",
    url: toUrl("Diesel engines generators"),
    icon: <img src={motor} />,
  },
  {
    name: "Gear motors",
    url: toUrl("Gear motors"),
    icon: <img src={gear} />,
  },
  {
    name: "Pump equipment",
    url: toUrl("Pump equipment"),
    icon: <img src={pump} />,
    children: [
      { name: "ORSTA pumps", url: toUrl("ORSTA pumps") },
      {
        name: "Rexroth Bosch Group pumps",
        url: toUrl("Rexroth Bosch Group pumps"),
      },
      {
        name: "Pumps for varnishes and paints",
        url: toUrl("Pumps for varnishes and paints"),
      },
      {
        name: "Explosion Proof BQS Series Pumps",
        url: toUrl("Explosion Proof BQS Series Pumps"),
      },
      {
        name: "BQG Pneumatic Diaphragm Pumps",
        url: toUrl("BQG Pneumatic Diaphragm Pumps"),
      },
    ],
  },
  {
    name: "Grinding machines",
    url: toUrl("Grinding machines"),
    icon: <img src={grinder} />,
  },
  {
    name: "Gearbox oil cooling",
    url: toUrl("Gearbox oil cooling"),
    icon: <img src={cooler} />,
  },
  {
    name: "Gruber springs",
    url: toUrl("Gruber springs"),
    icon: <img src={spring} />,
  },
];
export default function MainDivContent() {
  const mappedItems = items.map(({ children, ...rest }) => {
    return (
      <MenuItem {...rest}>
        {children &&
          children.map((child) => {
            return <MenuItem key={child.name} {...child} />;
          })}
      </MenuItem>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid red",
        margin: "0 5rem",
      }}
    >
      <div
        style={{
          border: "1px solid red",

          width: "30%",
          backgroundColor: "white",
        }}
      >
        {mappedItems}
      </div>
      <div style={{ width: "70%" }}>
        <Delivery />
      </div>
    </div>
  );
}
