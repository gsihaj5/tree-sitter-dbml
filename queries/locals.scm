; ==============================
; Definitions
; ==============================

(table_definition
  name: (identifier) @definition.table)

(column_definition
  name: (identifier) @definition.field)

(enum_definition
  name: (identifier) @definition.enum)

(enum_value
  (identifier) @definition.enum_member)

; ==============================
; References
; ==============================

(ref_path
  (identifier) @reference)

