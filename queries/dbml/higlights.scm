;; =========================
;; Top-level constructs
;; =========================

(table_definition) @keyword
(ref_definition)   @keyword
(enum_definition)  @keyword

;; =========================
;; Names
;; =========================

(table_definition
  name: (identifier) @type)

(column_definition
  name: (identifier) @property)

(identifier) @variable

;; =========================
;; Attributes
;; =========================

(attribute) @attribute

;; =========================
;; Comments
;; =========================

(comment) @comment
