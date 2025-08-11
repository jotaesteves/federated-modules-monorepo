import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface CardAccordionProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const CardAccordion = ({ header, children }: CardAccordionProps) => {
  return (
    <Accordion type="single" collapsible defaultValue="single">
      <AccordionItem value="single">
        <AccordionTrigger className="min-h-12">{header}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-balance">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CardAccordion;
