<template>
  <div class="mb-2">
    <div class="overflow-hidden bg-white">
      <h2 class="text-gray-700 border-b-2 divide-[#e6e6e6] p-4 text-sm text-zinc-500 before:content-[''] before:bg-warning before:w-3 before:h-3 before:relative before:inline-block before:rounded-full before:top-[2px] before:mx-[2px]">
        {{ data.title }}
      </h2>

      <table class="min-w-full">
        <thead v-if="!hide_header">
          <tr>
            <th v-for="(header_item, index) in data.header" :key="index" class="text-center text-[12px] py-2 px-4 bg-neutral-100" :class="header_item.classes">
              {{ header_item.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in data.data" :key="index" class="hover:bg-neutral-100">
            <td v-for="(column, i) in data.header" :key="'c'+i" class="text-center text-[12px] py-3 px-4 border-b-2 divide-[#e6e6e6] font-bold" :class="[column.classes, row[column.props].classes]">
              {{ row[column.props].label || '-' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  hide_header: {
    type: Boolean,
    default: false
  }
});
</script>