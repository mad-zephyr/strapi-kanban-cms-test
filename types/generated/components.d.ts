import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkoutSpecsWorkoutSpecs extends Schema.Component {
  collectionName: 'components_workout_specs_workout_specs';
  info: {
    displayName: 'WorkoutSpecs';
    icon: 'stack';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'workout-specs.workout-specs': WorkoutSpecsWorkoutSpecs;
    }
  }
}
