"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';

const StatsCounter = () => {
  const [numClients, setNumClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [squareFeet, setSquareFeet] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const targetClients = 100;
  const targetProjects = 250;
  const targetSqFeet = 6000;

  const clientAnimationDuration = 2;
  const defaultAnimationDuration = 1.5;

  useEffect(() => {
    if (isInView) {
      const clientControls = animate(0, targetClients, {
        duration: clientAnimationDuration,
        onUpdate(value) {
          setNumClients(Math.round(value));
        },
      });

      const projectsControls = animate(0, targetProjects, {
        duration: defaultAnimationDuration,
        onUpdate(value) {
          setProjectsCompleted(Math.round(value));
        },
      });

      const sqFeetControls = animate(0, targetSqFeet, {
        duration: defaultAnimationDuration,
        onUpdate(value) {
          setSquareFeet(Math.round(value));
        },
      });

      return () => {
        clientControls.stop();
        projectsControls.stop();
        sqFeetControls.stop();
      };
    }
  }, [isInView, targetClients, targetProjects, targetSqFeet, clientAnimationDuration, defaultAnimationDuration]);

  const statItems = [
    { 
      id: 1, 
      value: numClients, 
      label: 'Clients Served', 
      suffix: '+' 
    },
    { 
      id: 2, 
      value: projectsCompleted, 
      label: 'Projects Completed', 
      suffix: '+' 
    },
    {
      id: 3,
      value: squareFeet,
      label: 'Square Feet Transformed',
      displayFn: function(currentValue, targetValue) {
        if (currentValue === targetValue) {
          return `${targetValue / 1000}k+`; 
        }
        return currentValue.toLocaleString(); 
      },
      target: targetSqFeet 
    },
  ];

  return (
    <div ref={ref} className="bg-black text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: item.id * 0.2 }}
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-white">
                {item.displayFn 
                  ? item.displayFn(item.value, item.target) 
                  : `${item.value.toLocaleString()}${item.suffix}`
                }
              </p>
              <p className="text-lg sm:text-xl text-gray-300 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
