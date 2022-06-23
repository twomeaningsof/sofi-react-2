import { cond, equals, always, T } from "ramda";
import Card from "../Card";
import PlayerCard from "../Card/PlayerCard";
import TeamCard from "../Card/TeamCard";
import mapIndexed from "../../utils/mapIndexed";

const Section = ({ data, cardType }) =>
  mapIndexed(({ ...props }, index) => (
    <Card key={index}>
      {cond([
        [equals("player"), always(<PlayerCard {...props} />)],
        [equals("team"), always(<TeamCard {...props} />)],
        [T, () => null],
      ])(cardType)}
    </Card>
  ))(data);

export default Section;
