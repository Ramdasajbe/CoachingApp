import React from 'react';
import { Text, View } from 'react-native';
import CourseCard from '../../components/MaterialCard';

const Courses: React.FC = () => {
  return (
     <View>
        <CourseCard
        title="HTML Basics"
        description="Learn the structure of web pages with this simple PDF guide."
      />
      <CourseCard
        title="HTML Basics"
        description="Learn the structure of web pages with this simple PDF guide."
      />
      <CourseCard
        title="HTML Basics"
        description="Learn the structure of web pages with this simple PDF guide."
      />
      <CourseCard
        title="HTML Basics"
        description="Learn the structure of web pages with this simple PDF guide."
      />
       </View>
  );
};

export default Courses;
