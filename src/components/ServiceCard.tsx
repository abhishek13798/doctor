import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ServiceCardProps {
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc }) => (
  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[var(--kunj-eb)]/20">
    <CardHeader>
      <CardTitle className="text-xl font-bold bg-gradient-to-r from-[var(--kunj-eb)] to-[var(--kunj-java)] bg-clip-text text-transparent">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base leading-relaxed text-slate-600">
        {desc}
      </CardDescription>
    </CardContent>
    <CardFooter>
      <Button
        variant="ghost"
        className="group-hover:text-[var(--kunj-eb)] w-full justify-start"
        asChild
      >
        <a href="#reachout">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default ServiceCard;
