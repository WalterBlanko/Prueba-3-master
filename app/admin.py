from django.contrib import admin
from .models import Categoria, Producto, Contacto
from .forms import ProductoForm

#Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    list_display = ["nombreProducto", "precioProducto", "nombreCat"]
    list_editable = ['precioProducto']
    search_fields = ['nombreProducto']
    list_filter = ["nombreCat"]
    list_per_page = 3
    form = ProductoForm

admin.site.register(Categoria)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Contacto)