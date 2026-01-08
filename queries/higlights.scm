; ==============================
; Keywords
; ==============================

"Table"  @keyword
"Ref"    @keyword
"Enum"   @keyword
"Indexes" @keyword

; ==============================
; Identifiers
; ==============================

(identifier) @variable

; ==============================
; Table / Column Names
; ==============================

(table_definition
  name: (identifier) @type)

(column_definition
  name: (identifier) @property)

(enum_definition
  name: (identifier) @type)

(enum_value
  (identifier) @constant)

; ==============================
; Attributes
; ==============================

(attribute) @attribute

; ==============================
; References
; ==============================

(ref_path
  (identifier) @variable)

; ==============================
; Comments
; ==============================

(comment) @comment
