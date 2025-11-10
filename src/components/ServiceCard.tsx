import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  desc: string;
  features?: string[];
  duration?: string;
  approach?: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  desc, 
  features = [],
  duration,
  approach,
  icon
}) => {
  const handleCardClick = () => {
    const reachOutSection = document.getElementById('reachout');
    if (reachOutSection) {
      reachOutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card 
      onClick={handleCardClick}
      className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 h-full flex flex-col cursor-pointer"
    >
      <CardHeader>
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[var(--kunj-java)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-[var(--kunj-java)] bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed mt-2">
          {desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        {features.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">What's Included:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {duration && (
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Duration:</span> {duration}
            </p>
          </div>
        )}
        
        {approach && (
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Approach:</span> {approach}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="group-hover:text-primary w-full justify-start"
          asChild
        >
          <a href="#reachout" onClick={(e) => e.stopPropagation()}>
            Book a Session
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
