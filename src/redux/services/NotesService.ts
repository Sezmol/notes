import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISection } from '../../types/ISection';

export const notesAPI = createApi({
  reducerPath: 'noteAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['Notes'],
  endpoints: (build) => ({
    fetchAllNotes: build.query<ISection[], null>({
      query: () => ({
        url: '/notes',
      }),
      providesTags: (result) => ['Notes'],
    }),
    createSection: build.mutation<ISection, ISection>({
      query: (section) => ({
        url: '/notes',
        method: 'POST',
        body: section,
      }),
      invalidatesTags: ['Notes'],
    }),
    deleteSection: build.mutation<ISection, ISection>({
      query: (section) => ({
        url: `/notes/${section.id}`,
        method: 'DELETE',
        body: section,
      }),
      invalidatesTags: ['Notes'],
    }),
    updateSection: build.mutation<ISection, ISection>({
      query: (section) => ({
        url: `/notes/${section.id}`,
        method: 'PUT',
        body: section,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
});
