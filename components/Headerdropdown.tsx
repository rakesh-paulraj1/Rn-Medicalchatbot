import { View, Text } from 'react-native'
import React from 'react'
import * as DropdownMenu from 'zeego/dropdown-menu'
export type Headerdropdownprops={
    title:string
    selected:string;
    onSelect:(value:string)=>void;
    items:Array<{key:string; title:string,icon:string}>;
}
const Headerdropdown = ({title,selected,items,onSelect}:Headerdropdownprops) => {
  return (
    <DropdownMenu.Root>
<DropdownMenu.Trigger>
 
<View className='flex-row items-center font-bold justify-center'>
      <Text className='font-bold text text-xl'>{title}</Text>
      {selected && <Text className='text-gray-500 text text-xl font-bold'> {selected}&gt;</Text>}
      
    </View>
</DropdownMenu.Trigger>
<DropdownMenu.Content>
    {items.map((item)=>(
        <DropdownMenu.Item key={item.key} onSelect={() => onSelect(item.key)}>
           <DropdownMenu.ItemTitle>
          {item.title}
           </DropdownMenu.ItemTitle>
        </DropdownMenu.Item>
    ))}

</DropdownMenu.Content>
  
    </DropdownMenu.Root>
  )
}

export default Headerdropdown