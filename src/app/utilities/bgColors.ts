type LightBlueGradient = 'lightBlueGradient';
type LightOrangeGradient = 'lightOrangeGradient';
type LightTealGradient = 'lightTealGradient';
export type BgColors = Record<
  LightBlueGradient | LightOrangeGradient | LightTealGradient,
  string
>;
export const bgColors: BgColors = {
  lightBlueGradient:
    'relative h-screen bg-gradient-to-r from-violet-200 via-teal-100 to-cyan-300',
  lightOrangeGradient:
    'relative h-screen bg-gradient-to-r from-orange-100 via-red-200 to-rose-200',
  lightTealGradient:
    'relative h-screen bg-gradient-to-r from-green-100 via-green-200 to-teal-300',
};
