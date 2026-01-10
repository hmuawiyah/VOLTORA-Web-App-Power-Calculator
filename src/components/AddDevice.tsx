'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { LuGamepad2, LuPlus, LuMonitor } from "react-icons/lu"
import { MdPhoneIphone } from "react-icons/md"
import { Badge } from "./ui/badge"

import { useItemsStore } from "@/store/store"

import { categories, categoryConfig, grouped, filteredGrouped } from "@/components/data/categoryData"

export function AddDevice() {

  const { items, addItem, removeItem, search, setSearch } = useItemsStore()
  // const [search, setSearch] = useState("")

  // const result = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'primary'} className="flex justify-between w-full h-full px-6! LG rounded-xl shadow-md">
          <span className="text-base lg:text-lg">Add Device</span>
          <LuPlus className="size-5" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Choose Device</DialogTitle>
        <Button onClick={() => alert(JSON.stringify(items))}>items</Button>

        <Input placeholder="search device..." value={search} onChange={e => setSearch(e.target.value)} />

        <hr />

        <div className="overflow-y-auto h-[250] md:h-[400]">

          {Object.entries(filteredGrouped).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4 mb-4">
              <Badge variant={category as any} className="flex items-center gap-2">
                {categoryConfig[category as keyof typeof categoryConfig].icon}
                {categoryConfig[category as keyof typeof categoryConfig].label}
              </Badge>

              {items.map((item, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  className="justify-between"
                  onClick={() => addItem(item)}
                >
                  <span>{item.title}</span>
                  <span>{item.power}</span>
                </Button>
              ))}
            </div>
          ))}

          {/* {categories.map((category) => (
            <div key={category} className="flex flex-col gap-4 mb-4">
              <Badge variant={category} className="flex items-center gap-2">
                {categoryConfig[category].icon}
                {categoryConfig[category].label}
              </Badge>


              {grouped[category].map((item, i) => (
                <Button key={i} variant="secondary" className="justify-between" onClick={() => addItem(item)}>
                  <span>{item.title}</span>
                  <span>{item.power}</span>
                </Button>
              ))}
            </div>
          ))} */}

        </div>

      </DialogContent>
    </Dialog>
  )
}
