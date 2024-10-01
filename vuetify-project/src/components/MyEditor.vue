<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

import BoldIcon from 'vue-material-design-icons/FormatBold.vue'
import ItalicIcon from 'vue-material-design-icons/FormatItalic.vue'
import UnderlineIcon from 'vue-material-design-icons/FormatUnderline.vue'
import H1Icon from 'vue-material-design-icons/FormatHeader1.vue'
import H2Icon from 'vue-material-design-icons/FormatHeader2.vue'
import ListIcon from 'vue-material-design-icons/FormatListBulleted.vue'
import OrderedListIcon from 'vue-material-design-icons/FormatListNumbered.vue'
import BlockquoteIcon from 'vue-material-design-icons/FormatQuoteClose.vue'
import CodeIcon from 'vue-material-design-icons/CodeTags.vue'
import HorizontalRuleIcon from 'vue-material-design-icons/Minus.vue'
import UndoIcon from 'vue-material-design-icons/Undo.vue'
import RedoIcon from 'vue-material-design-icons/Redo.vue'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    // console.log(editor.getHTML())
    emit('update:modelValue', editor.getHTML())
  },
  extensions: [StarterKit, Underline],
  editorProps: {
    attributes: {
      class:
        '',
    },
  },
})
</script>

<template>
  <div>
    <section
      v-if="editor"
      class="sections"
    >
      <button
        type="button"
        @click="editor.chain().focus().toggleBold().run()"
        :class="['pa-1', { 'teal rounded': editor.isActive('bold') }]"

      >
        <BoldIcon title="Bold" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'teal rounded': editor.isActive('italic') }"
        class="pa-1"
      >
        <ItalicIcon title="Italic" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'teal rounded': editor.isActive('underline') }"
        class="ps-1"
      >
        <UnderlineIcon title="Underline" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{
          'teal': editor.isActive('heading', { level: 1 }),
        }"
        class="pa-1"
      >
        <H1Icon title="H1" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{
          'teal': editor.isActive('heading', { level: 2 }),
        }"
        class="pa-1"
      >
        <H2Icon title="H2" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'cyan rounded': editor.isActive('bulletList') }"
        class="pa-1"
      >
        <ListIcon title="Bullet List" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'teal': editor.isActive('orderedList') }"
        class="pa-1"
      >
        <OrderedListIcon title="Ordered List" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'teal': editor.isActive('blockquote') }"
        class="pa-1"
      >
        <BlockquoteIcon title="Blockquote" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleCode().run()"
        :class="{ 'teal': editor.isActive('code') }"
        class="pa-1"
      >
        <CodeIcon title="Code" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().setHorizontalRule().run()"
        class="pa-1"
      >
        <HorizontalRuleIcon title="Horizontal Rule" />
      </button>
      <button
        type="button"
        class="pa-1 disabled:text-gray-400"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <UndoIcon title="Undo" />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
        class="pa-1 disabled:text-gray-400"
      >
        <RedoIcon title="Redo" />
      </button>
    </section>
    <EditorContent :editor="editor" class="custom-editor-class prose" />
  </div>
</template>


<style scoped>
.custom-editor-class {
    border: 1px solid #000;
    padding: 1rem;
    min-height: 12rem;
    max-height: 12rem;
    overflow-y: auto;
    outline: none;
}

/* Hilangkan border/outline saat editor difokuskan */
.custom-editor-class:focus {
    border: none;
    outline: none;
}

.custom-editor-class * {
    border: none !important;
    outline: none !important;
}

.prose {
    max-width: none;
}

.sections {
    color: #4a5568; 
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 1rem; 
  border-top: 1px solid #cbd5e0; 
  border-left: 1px solid #cbd5e0; 
  border-right: 1px solid #cbd5e0; 
  padding: 1rem; 

}
</style>
