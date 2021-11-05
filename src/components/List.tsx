import React, { FC } from 'react';

interface ListProps<T> {
   items: [];
   renderItem: (item: T) => React.ReactNode


}

export default function List<T>(props: ListProps<T>) {


}