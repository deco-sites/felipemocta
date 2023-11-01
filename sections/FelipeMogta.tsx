export interface Props {
  title?: string;
}

export default function FelipeMogta({
  title = "felypy moktah",
}: Props) {
  return (
    <div class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-3xl md:text-base">
      {title} ------
    </div>
  );
}
